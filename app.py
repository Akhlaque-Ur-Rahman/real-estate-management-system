from flask import Flask, render_template, request, redirect,jsonify, session, url_for
import mysql.connector


app = Flask(__name__)
app.secret_key = "mysecretkey"


@app.route("/")
def home():
    properties = []
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM properties")
        properties = cursor.fetchall()
        cursor.close()
        conn.close()
    except Exception as e:
        print(f"[home] DB unavailable: {e}")
    return render_template("index.html", properties=properties)


# =========================
# ABOUT PAGE
# =========================
@app.route("/about")
def about_page():
    return render_template("aboutus.html")

# ========================
# featured
# ========================
@app.route("/featured")
def featured_properties_section():
    return render_template("featured_properties_section.html")
# ========================
# services
# ========================
@app.route("/services")
def services_section():
    return render_template("services_section.html")
#
# =========================
# STORY PAGE
# =========================
@app.route("/story")
def story_page():
    return render_template("story.html")


# =========================
# CONTACT PAGE
# =========================
@app.route("/contact", methods=["GET", "POST"])
def contact_page():

    if request.method == "POST":

        user_name = request.form.get("name")
        user_email = request.form.get("email")
        user_msg = request.form.get("message")

        print(
            f"Form Data: Name: {user_name}, "
            f"Email: {user_email}, "
            f"Message: {user_msg}"
        )

        return """
        <h1>Thank You!</h1>
        <p>Humein aapka message mil gaya hai.</p>
        <a href='/contact'>Back</a>
        """

    return render_template("contactus.html")


# =========================
# ADD PROPERTY PAGE
# =========================
@app.route("/add-property", methods=["GET", "POST"])
def add_property():

    if request.method == "POST":

        p_name = request.form.get("p_name")

        print(f"Property Added: {p_name}")

        return redirect(url_for("home"))

    return render_template("add-property.html")


# =========================
# FIND MY HOME PAGE
# =========================
@app.route("/find-my-home")
def find_home_page():
    return render_template("findmyhome.html")


# =========================
# REQUEST PAGE
# =========================
@app.route("/request-page")
def request_page():
    return render_template("request.html")


# =========================
# DETAILS PAGE
# =========================
@app.route("/details-page")
def details_page():
    return render_template("details.html")


# =========================
# LoginPAGE
# =========================
@app.route("/login-page")
def login_page():
    return render_template("login.html")


# =========================
# SIGNUP PAGE
# =========================
@app.route("/signup")
def signup_page():
    return render_template("signup.html")


# =========================
# MYSQL DATABASE CONNECTION
# =========================
def get_db_connection():

    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="mysql123",
        database="realestate_db"
    )

    return conn


# =========================
# TEST DATABASE CONNECTION
# =========================
@app.route("/test-db")
def test_db():

    try:
        conn = get_db_connection()

        if conn.is_connected():
            conn.close()
            return "Database Connected Successfully"

        return "Database Not Connected"

    except Exception as e:
        return f"Database Error: {str(e)}"


# =========================
# LoginFUNCTION
# =========================
# @app.route("/login", methods=["GET", "POST"])
# def login():

#     if request.method == "POST":

#         email = request.form.get("email")
#         password = request.form.get("password")

        # TEMP LOGIN
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")

        db_conn = get_db_connection()
        cursor = db_conn.cursor(dictionary=True)

        query = "SELECT * FROM users WHERE email = %s AND password = %s"
        cursor.execute(query, (email, password))
        user = cursor.fetchone()

        cursor.close()
        db_conn.close()

        if user:
            session["role"] = "admin"
            return redirect(url_for("admin_dashboard"))
        else:
            return "Invalid Email or Password"

    return render_template("login.html")


@app.route("/logout")
def logout():
    session.clear()
    return redirect(url_for("home"))


@app.route("/forgot-password")
def forgot_password():
    return render_template("forgot.html")


# =========================
# SIGNUP FUNCTION
# =========================
# @app.route("/signup", methods=["GET", "POST"])
# def signup():

#     if request.method == "POST":
#         return redirect(url_for("login"))

#     return render_template("signup.html")



@app.route('/signup', methods=['GET', 'POST'])
def signup():

    if request.method == 'POST':

        name = request.form['name']
        email = request.form['email']
        password = request.form['password']

        conn = get_db_connection()
        cursor = conn.cursor()

        query = """
        INSERT INTO users(name, email, password)
        VALUES(%s, %s, %s)
        """

        values = (name, email, password)

        cursor.execute(query, values)
        conn.commit()

        cursor.close()
        conn.close()

        session["role"] = "user"
        # SIGNUP KE BAAD DASHBOARD OPEN HOGA
        return redirect(url_for('user_dashboard'))

    return render_template('signup.html')

# =========================
# ADMIN DASHBOARD
# =========================
@app.route("/admin_dashboard")
def admin_dashboard():

    if session.get("role") == "admin":

        try:

            conn = get_db_connection()
            cursor = conn.cursor()

            # FETCH ALL PROPERTIES
            cursor.execute("SELECT * FROM properties")

            rows = cursor.fetchall()

            conn.close()

            return render_template(
                "admin_dashboard.html",
                properties=rows
            )

        except Exception as e:

            return f"Database Error: {str(e)}"

    return redirect(url_for("login"))








@app.route("/user-dashboard")
def user_dashboard():

    if session.get("role") == "user":

        try:

            conn = get_db_connection()
            cursor = conn.cursor()

            # FETCH ALL PROPERTIES
            cursor.execute("SELECT * FROM properties")

            rows = cursor.fetchall()

            conn.close()

            return render_template(
                "user-dashboard.html",
                properties=rows
            )

        except Exception as e:

            return f"Database Error: {str(e)}"

    return redirect(url_for("signup"))
# =========================
# PROPERTY DETAILS PAGE
# =========================
# @app.route("/property/<int:p_id>")
# def property_details(p_id):

#     try:

#         conn = get_db_connection()
#         cursor = conn.cursor()

#         cursor.execute(
#             "SELECT * FROM properties WHERE id = %s",
#             (p_id,)
#         )

#         property_data = cursor.fetchone()

#         conn.close()

#         if property_data:

#             return render_template(
#                 "property_details.html",
#                 p=property_data
#             )

#         return "Property Not Found", 404

#     except Exception as e:

#         return f"Database Error: {str(e)}"
    




   # =========================
# CHATBOT API
# =========================

@app.route('/chat', methods=['POST'])

def chat():

    # USER MESSAGE

    data = request.get_json()

    user_message = data['message']

    # BOT REPLY

    bot_reply = "👋 Hello! How can I help you?"

    # DATABASE CONNECTION

    conn = get_db_connection()

    cursor = conn.cursor()

    # SQL QUERY

    sql = """

    INSERT INTO chatbot_messages

    (user_message, bot_reply)

    VALUES(%s,%s)

    """

    values = (user_message, bot_reply)

    # EXECUTE QUERY

    cursor.execute(sql, values)

    conn.commit()

    # CLOSE CONNECTION

    cursor.close()

    conn.close()

    # RETURN RESPONSE

    return jsonify({

        "reply": bot_reply

    })







# PROPERTY DETAILS PAGE
# @app.route('/property/<int:id>')
# def property_details(id):

#     conn = get_db_connection()
#     cursor = conn.cursor(dictionary=True)

#     cursor.execute(
#         "SELECT * FROM properties WHERE id=%s",
#         (id,)
#     )

#     property = cursor.fetchone()

#     cursor.close()
#     conn.close()

#     return render_template(
#         'property_details.html',
#         property=property
#     )

@app.route('/property/<int:id>')
def property_details(id):

    conn = get_db_connection()

    cursor = conn.cursor(dictionary=True)

    cursor.execute(
        "SELECT * FROM properties WHERE id=%s",
        (id,)
    )

    property = cursor.fetchone()

    cursor.close()
    conn.close()

    return render_template(
        'property_details.html',
        property=property
    )





























































    
if __name__ == "__main__":
    app.run(debug=True)