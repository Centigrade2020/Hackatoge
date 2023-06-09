from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view,parser_classes
from rest_framework.parsers import JSONParser
from django.contrib.auth.hashers import make_password,check_password
from .models import get_auth,add_user,get_user,authenticate,get_book_data,logout_user,u_user,add_data,booking
from bson import json_util
import json
import openai
import environ

env = environ.Env()
environ.Env.read_env()

openai.api_key=env("OPENAI_KEY")

def home(request):
    return render(request,"index.html",{})

@api_view(["POST"])
@parser_classes([JSONParser])
def get_db(request):
    print(get_auth())
    return Response({})

@api_view(["POST"])
@parser_classes([JSONParser])
def create_user(request):
    try:
        if request.data:
            data = request.data
            hash_pass = make_password(data['passwd'])
            res = add_user(data['fname'],data['lname'],data['email'],hash_pass)
            print(res)
            if res:
                login(data['email'],data['passwd'])
                return Response({'message':"Success","status_code":201})
            return Response({"message":"User Already Exists","status_code":403})
        
    except Exception as e:
        print("Sign Up error ",e)
        return Response({"message":"Some error Occurred"})     


@api_view(["POST"])
@parser_classes([JSONParser])
def getUser(request):
    try:
        data =request.data
        user = get_user(data['email'])
        return Response({"message":json.loads(json_util.dumps(user)),"status_code":200})
    except Exception as e:
        print("get user",e)
        return Response({"message":"Some error Occurred"})

@api_view(["POST"])
@parser_classes([JSONParser])
def update_user(request):
    try:
        data = request.data
        print(data['email'])
        u_user(data['email'],data['phone'],data['day'],data['month'],data['year'],data['city'],data['state'],data['country'])
        user = get_user(data['email'])
        return Response({"message":json.loads(json_util.dumps(user)),"status_code":201})
    except Exception as e:
        print("update user ",e)
        return Response({"message":"Some error Occurred","status_code":500})


def login(email,password):
    try :
        user = get_user(email)
        
        passwd = user['password']
        if check_password(password,passwd):
            u = authenticate(user["_id"]) 
            return u
        else:
            return False
    except Exception as e:
        print("login ",e)
        return False

@api_view(["POST"])
@parser_classes([JSONParser])
def login_user(request):
    try:
        if request.data:
            data = request.data
            chk = login(data['email'],data['passwd'])
            print(chk)
            if chk:
                print(json.loads(json_util.dumps(chk)))
                return Response({'message':json.loads(json_util.dumps(chk)),"status_code":200,"is_authenticated":chk['is_authenticated']})
            else:
                return Response({"message":"wrong Password","status_code":403})
    except Exception as e:
        print("login error: ",e)
        return Response({"message":"Some error occured","status_code":500})

@api_view(["POST"])
@parser_classes([JSONParser])
def logout(request):
    try:
        data = request.data
        logout_user(data['email'])
        return Response({"message":"success"})
    except Exception as e:
        print("logout ",e)
        return Response({"Error":"Something went wrong","status_code":500})


@api_view(["POST"])
@parser_classes([JSONParser])
def ask_ai(request):
    print("hi")
    data = request.data
    # message = "Generate list of jsons of 3 itineraries for"+str(data['days'])+ "days in"+data['city']+"with budget "+str(data['budget'])+" in json format of example {'_id':,'plan':[{'day':1,'activities':{'time':'','description':'','budget':'Rs '}},],'Total_Budget':'Rs ','key':"+data['days']+"_"+data['city']+"} only as list of json not any text"
    message = "Generate 1 itinerary for"+str(data['days'])+ "days in"+data['city']+"within budget "+str(data['budget'])+""" in list of json format of example  [{_id:"643a9091a7e8be42cd8ac139",
      plan: [
        {
          day: 1,
          activities: [
            {
              time: "9:00 AM",
              description: "Arrive in Dubai and check-in to hotel",
            },
            {
              time: "11:00 AM",
              description: "Visit the Dubai Mall",
            },
            {
              time: "3:00 PM",
              description: "Take a tour of the Burj Khalifa",
            },
            {
              time: "7:00 PM",
              description: "Experience the Dubai Fountain show",
            },
          ],
        },
        {
          day: 2,
          activities: [
            {
              time: "10:00 AM",
              description: "Visit the Palm Jumeirah Island",
            },
            {
              time: "2:00 PM",
              description: "Relax at the Jumeirah Beach",
            },
            {
              time: "7:00 PM",
              description: "Dine at the Burj Al Arab",
            },
          ],
        },
        {
          day: 3,
          activities: [
            {
              time: "9:00 AM",
              description: "Explore the Dubai Miracle Garden",
            },
            {
              time: "1:00 PM",
              description: "Visit the Dubai Museum",
            },
            {
              time: "5:00 PM",
              description: "Shop at Souk Madinat Jumeirah",
            },
            {
              time: "8:00 PM",
              description: "Experience nightlife at the Dubai Marina",
            },
          ],
        },
      ],
      totalBudget:5000
      key: "3-dubai,ae",
    }] """
    
    if message:
        chat = openai.ChatCompletion.create(
            model="gpt-3.5-turbo", messages= [ {"role": "system", "content": message} ]
        )
        
    reply = chat.choices[0].message.content
    add_data(reply,data['email'])
    # print(reply)
    return Response(reply.strip())

@api_view(["POST"])
@parser_classes([JSONParser])
def book(request):
    try:
        data  =request.data
        booking(data)
        return Response({"message":"inserted successfully","status_code":201})
    except Exception as e:
        print("book ",e)
        return Response({"message":"Some Error occured",'status_code':500})

@api_view(["POST"])
@parser_classes([JSONParser])
def get_bookings(request):
    try:
        data = request.data
        user = get_book_data(data['email'])
        li=[]
        for i in user:
            li.append(i)
            
        return Response({"message":li})
    except Exception as e:
        print("get booking",e)
        return Response({"message":"Some Error occured",'status_code':500})
