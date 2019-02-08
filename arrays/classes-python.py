class Player:
    def __init__(self, name, type):
        self.name = name
        self.type = type

    def Introduce(self):
        print('Hi I am ' + self.name + ' and I am ' + self.type)

class Wizard(Player):
    def __init__(self, name, type):
        Player.__init__(self, name, type)

    def Play(self):
        print("Weeee I'm a " + self.type)

Wizard1 = Wizard("Shelly", "Healer")
Wizard2 = Wizard("Shaun", "Dark Magic")

Wizard1.Introduce()
Wizard2.Introduce()
Wizard1.Play()
