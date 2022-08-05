name = input("What is your name? ")
print("Hello " + name)
print("Hello " + name + "!")

while True:
    print("Please enter a number: ")
    num = input()
    if num.isdigit():
        break
    print("Please enter a number")