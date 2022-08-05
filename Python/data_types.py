#Declare Variables
x = 15
y = 10
z = x + y
print(z)

"""
Python has a number of data types, including strings, numbers, and Booleans.
"""
#Strings
x = "Hello World"
print(x)

"""
Strings can be added together with the + operator:
"""
x = "Hello"
y = "World"
z = x + y
print(z)

"""
Strings can also be multiplied by integers:
"""
x = "Hello"
y = "World"
z = x * 3
print(z)

"""
Primative data types
"""
#Integers
x = 10
print(type(x))

#Boolean
x = True
print(type(x))

#Strings
x = "Hello"
print(type(x))

#float
x = 1.0
print(type(x))


"""
Composite data types
"""
#List
x = ["Seattle", "Tacoma", "Bellevue"]
print(type(x))

#Tuple
x = ("Seattle", "Tacoma", "Bellevue")   #Note the comma
print(type(x))

#Set
x = {"Seattle", "Tacoma", "Bellevue"}
print(type(x))

#Dictionary
x = {"name": "Seattle", "state": "WA"}
print(type(x))

"""
Operators and Expressions
"""

#Arithmetic Operators
x = 10
y = 5
z = x + y
print(z)
z = x - y
print(z)
z = x * y
print(z)
z = x / y    #Note the floating point
print(z)
z = x % y   #Note the modulus it's basically the remainder
print(z)
z = x ** y   #Note the exponent
print(z)
z = x // y  #Note the floor division
print(z)

"""
Comparison Operators
"""

#Equal to
x = 10 #Note the equal to
y = 10 
z = x == y
print(z)

    #Not equal to
x = 10
y = 11
z = x != y
print(z)

    #Greater than
x = 10
y = 5
z = x > y
print(z)    

    #Less than
x = 10
y = 15
z = x < y

    #Greater than or equal to
x = 10
y = 5
z = x >= y
print(z)

    #Less than or equal to
x = 10
y = 15
z = x <= y
print(z)

    #Identity
x = 10
y = 10
z = x is y
print(z)

    #Not Identity
x = 10
y = 11
z = x is not y
print(z)

    #In
x = 10
y = [10, 20, 30]
z = x in y
print(z)

    #Not In
x = 10  
y = [10, 20, 30]
z = x not in y
print(z)

    #Is
x = 10
y = 10
z = x is y
print(z)

    #Is Not
x = 10
y = 11
z = x is not y
print(z)

"""
Logical Operators
"""

    #And
x = True
y = True
z = x and y #Note the and
print(z)

    #Or
x = True
y = False
z = x or y #Note the or
print(z)

    #Not
x = True
y = not x               #Note the not
print(y)







