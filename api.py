import json

def get_user_info(data):
  user_id = "john_doe_17091999"
  email = "john@xyz.com"
  roll_number = "ABCD123"
  numbers = data["data"]
  alphabets = [x for x in data["data"] if x.isalpha()]
  highest_alphabet = max(alphabets, key=lambda x: x.upper())

  return {
    "is_success": True,
    "user_id": user_id,
    "email": email,
    "roll_number": roll_number,
    "numbers": numbers,
    "alphabets": alphabets,
    "highest_alphabet": highest_alphabet
  }

def get_operation_code():
  return 1

def main():
  if request.method == "POST":
    data = json.loads(request.body)
    user_info = get_user_info(data)
    return jsonify(user_info)
  elif request.method == "GET":
    return jsonify(get_operation_code())

if __name__ == "__main__":
  app.run(debug=True)