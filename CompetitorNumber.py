#!/usr/bin/env python
# coding: utf-8

# In[1]:


import numpy as np
import pandas as pd
import math


# In[2]:


from selenium import webdriver
from selenium.webdriver.common.by import By


# In[3]:


path= 'C://chromedriver.exe'
browser= webdriver.Chrome(executable_path=path)


# In[4]:


url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
api_key = 'AIzaSyDjj1s1972Cg_pDtmWC5QGse4UMIcgWQUQ'


# In[7]:


lat = 26.8482918 #from the data
lng = 80.9272826 #from the data


# In[8]:


radius = 5000 #radial distance in metres


# In[16]:


business_type= 'ata chakki' #from the data


# In[17]:


location_str = f'location={lat},{lng}'
radius_str = f'radius={radius}'
type_str = f'type={business_type}' if business_type else ''
api_key_str = f'key={api_key}'
request_url = f'{url}{location_str}&{radius_str}&{type_str}&{api_key_str}'


# In[18]:


import json
import requests


# In[19]:


response = requests.get(request_url)
data = json.loads(response.text)


# In[21]:


print(data)


# In[31]:


names=[]
addresses=[]
locn_lat=[]
locn_lng=[]


# In[32]:


if data['status'] == 'OK':
    for result in data['results']:
        name = result['name']
        address = result['vicinity']
        latitude= result['geometry']['location']['lat']
        longitude= result['geometry']['location']['lng']
        names.append(name)
        addresses.append(address)
        locn_lat.append(latitude)
        locn_lng.append(longitude)
else:
    print('Error:', data['status'])


# In[34]:


print(len(names))


# In[36]:


print(locn_lng)


# In[44]:


data=[]
column=['Business Name','Address','Latitude','Longitude']


# In[45]:


for i in range(len(names)):
    val=[names[i],addresses[i],locn_lat[i],locn_lng[i]]
    data.append(val)


# In[51]:


df= pd.DataFrame(data,columns=column)


# In[52]:


df.head()


# In[48]:


df.to_excel('Nearby_Business.xlsx')


# In[55]:


with open('proclamation.txt','w') as f:
    f.write('Business Competitions in the location specified is: \n')
    for i,name in enumerate(names):
        f.write(f'{i+1}  {name}\n')
    f.write(f'Total business competitors: {len(names)}')


# In[ ]:





# In[ ]:




