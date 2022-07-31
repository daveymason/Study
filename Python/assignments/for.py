for x in range(5, 10, 1):
    print(x)
print("For loop has finished")






'''
for <iterable> in range(<start>, <stop>, <step>):
    statement1
    statement2
    etc.
'''

for x in "itirable":
    print(x)

pokemonArray = ["pikachu", "charmander", "bulbasaur", "squirtle"]
for pokemonVar in pokemonArray:
    print(pokemonVar)
    if pokemonVar == "squirtle":
        print("Squirtle is my favorite pokemon!")
        break
    elif pokemonVar == "charmander":
        print("Charmander is my favorite pokemon!")
        break

'''Itirable is a list, string, tuple, or other iterable object.'''
my_list = [1, 2, 3, 4, 5]
for x in my_list:
    print(x)

my_tuple = (1, 2, 3, 4, 5)
for x in my_tuple:
    print(x)

my_set = {1, 2, 3, 4, 5}
for x in my_set:
    print(x)

my_dict = {"name": "John", "age": 30, "city": "New York"}
for x in my_dict:
    print(x)

my_string = "Hello World"
for x in my_string:
    print(x)