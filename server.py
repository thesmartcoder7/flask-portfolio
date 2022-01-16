from flask import Flask, render_template, request
from datetime import date
import requests
import smtplib

app = Flask(__name__)
maintenance_mode = False
year = date.today().year

@app.route('/')
def home():
    return render_template('index.html', year=year)


@app.route('/projects')
def projects():
    return render_template('projects.html')


@app.route('/blog')
def get_posts():
    blog_url = "https://api.npoint.io/8c1f6df31976a83110a3"
    response = requests.get(blog_url)
    all_posts = response.json()
    for post in all_posts:
        body = post["post"]
        body = body.split()
        brief_post = body[:35]
        brief_post = " ".join(brief_post) + "..."
        post["excerpt"] = brief_post
    return render_template('blog.html', posts=all_posts, year=year)

# work on a wt form format . . . ( working on it )
@app.route('/contact', methods=["POST", "GET"])
def contact():
    if request.method == "POST":
        # uncomment for the functionality to send this details to your email after form validation.
        # name = request.form['name']
        # email = request.form['email']
        # message = request.form['message']
        # with smtplib.SMTP("smart-code.dev") as connection:
        #     username = "your own email"
        #     password = "your own password"
        #     recipient = "where you want emails from this site to be delivered"
        #     connection.starttls()
        #     connection.login(user=username, password=password)
        #      connection.sendmail(
        #          from_addr=username,
        #          to_addrs=recipient,
        #          msg=f"Subject: Message from {name}: ({email}) \n{message}"
        #      )
        return render_template('contact.html', message_sent=True, year=year)
    return render_template('contact.html', message_sent=False, year=year)


@app.route('/login')
def login():
    return render_template('login.html')


@app.route('/maintenance')
def maintenance():
    return render_template('maintenance.html')


@app.route('/blog/<title>')
def get_single(title):
    blog_url = "https://api.npoint.io/8c1f6df31976a83110a3"
    response = requests.get(blog_url)
    all_posts = response.json()
    single_post = {}
    for post in all_posts:
        if title in post["title"]:
            single_post = post

    return render_template(
        'blog-single.html',
        image=single_post["image"],
        title=title,
        body=single_post["post"],
        date= single_post["date"]
    )


@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404



if __name__ == '__main__':
    app.run(debug=True)
