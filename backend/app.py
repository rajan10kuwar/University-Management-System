from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for React frontend

# MySQL configuration (users must replace credentials)
db_config = {
    'host': 'localhost',
    'user': 'root',      # Replace with your MySQL username
    'password': 'Lapeno13579$',  # Replace with your MySQL password
    'database': 'university_management'
}

# Route to fetch all students
@app.route('/api/students', methods=['GET'])
def get_students():
    try:
        # Connect to MySQL
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor(dictionary=True)  # Return results as dictionaries
        # Query all students
        cursor.execute("SELECT * FROM Student")
        students = cursor.fetchall()
        # Close cursor and connection
        cursor.close()
        conn.close()
        # Return students as JSON
        return jsonify(students)
    except mysql.connector.Error as e:
        # Return error if connection or query fails
        return jsonify({"error": f"Database error: {str(e)}"}), 500

# Run the app on port 5000
if __name__ == '__main__':
    app.run(debug=True, port=5000)