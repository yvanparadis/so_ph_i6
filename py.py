import requests

# API URL
url = "https://jsonplaceholder.typicode.com/posts"

# Fetch data from the API
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    data = response.json()
    
    # Display the first 5 posts
    for post in data[:5]:
        print(f"Post ID: {post['id']}")
        print(f"Title: {post['title']}")
        print(f"Body: {post['body']}\n")
else:
    print(f"Failed to fetch data. Status code: {response.status_code}")
