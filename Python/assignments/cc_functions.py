print('Hello')

int_to_string = str(5)
print(int_to_string)

int_to_float = float(5)
print(int_to_float)

'''
There are four types of functions in Python:
lambda functions are anonymous functions
they are used to create small, one-use functions
they are used to create functions that are not stored in a variable
they are used to create functions that are not called by name

VOID FUNCTIONS
void functions do not return a value


value returning functions
value returning functions return a value


built in functions
built in functions are functions that are already defined in the language
'''

# VOID FUNCTIONS
def void_function():
    print('This is a void function')
    return

# value returning functions
def value_function():
    print('This is a value function')
    return 'This is a value function'

# built in functions
def built_in_function(string):
    print(string)
    return string

# lambda functions
lambda_function = lambda: print('This is a lambda function')