student = {
    "name": "Emilio",
    "state": "Puebla",
    "age": "27"
}
print(type(student))
print(student)

for key in student.keys():
    print(key)

for value in student.values():
    print(value)

for key, value in student.items():
    print(f"KEY = {key}, value {value}")
