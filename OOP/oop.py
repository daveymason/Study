class Pokemon: 
    def __init__(self, name: str, max_armor: int, max_hit: int):
        self.name = name
        self.armor = max_armor
        self.hit_points = max_hit

    def attack(self):
        print(f"{self.name} attacks")
    
    def defend(self):
        print(f"{self.name} defends itself")

    pikachu = Pokemon("Pikachu", 50, 500)
    pikachu.attack()
    pikachu.attack()
    pikachu.defend()

    snorlaw = Pokemon("Snorlax", 75, 900)
    snorlax.attack()




