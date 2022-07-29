while True:
    wizard = "Wizard"
    elf = "Elf"
    human = "Human"
    dwarf = "Dwarf"

    wizard_hp = 70
    elf_hp = 90
    human_hp = 100
    dwarf_hp = 120

    wizard_damage = 50
    elf_damage = 40
    human_damage = 30
    dwarf_damage = 20

    dragon_hp = 150
    dragon_damage = 10

    character = input("Choose your character: ")

    if character == wizard:
        character = wizard
        print("You have chosen " + wizard + "!")
        my_hp = wizard_hp
        print("Your health points are " + str(wizard_hp))
        my_damage = wizard_damage
        print("Your damage is " + str(wizard_damage))
        break
    elif character == elf:
        character = elf
        print("You have chosen " + elf + "!")
        my_hp = elf_hp
        print("Your health points are " + str(elf_hp))
        my_damage = elf_damage
        print("Your damage is " + str(elf_damage))
        break
    elif character == human:
        character = human
        print("You have chosen " + human + "!")
        my_hp = human_hp
        print("Your health points are " + str(human_hp))
        my_damage = human_damage
        print("Your damage is " + str(human_damage))
        break
    elif character == dwarf:
        character = dwarf
        print("You have chosen " + dwarf + "!")
        my_hp = dwarf_hp
        print("Your health points are " + str(dwarf_hp))
        my_damage = dwarf_damage
        print("Your damage is " + str(dwarf_damage))
        break
    else:
        print("Please choose a character!")
        continue
    
while True:
    dragon_hp = dragon_hp - my_damage
    print("The dragon has " + str(dragon_hp) + " health points left.")
    my_hp = my_hp - dragon_damage
    print("You have " + str(my_hp) + " health points left.")
    if dragon_hp <= 0:
        print("You have defeated the dragon!")
        break
    elif my_hp <= 0:
        print("You have been defeated by the dragon!")
        break
