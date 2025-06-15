import math
'''
def sum_two(a, b):
    return a + b

print(sum_two(5, 6))
'''

'''
def multiply(a, b=2):
    return a * b

print(multiply(4, 3))
'''

'''
def power(a, b=2):
    return a**b

print(power(4, 3))
'''

'''
list_OfCapitals = ["Washington DC", "Riga", "Berlin", "Warsaw", "Stockholm"]

def write_inside_file(add):

    list_OfCapitals.append(add)
    file = open("capitals.txt", "w")

    for i in range(len(list_OfCapitals)):
        file.write(list_OfCapitals[i])
        if(i < len(list_OfCapitals) - 1):
            file.write(", ")
    file.close()

user_Input = input("Write A Capital, To Add It To The File: ")
write_inside_file(user_Input)

def copy_File():
    file = open("capitals.txt", "r")
    files_Contenets = file.read()
    file.close()

    file2 = open("capitals2.txt", "w")
    file2.write(files_Contenets)
    file2.close()

copy_File()

'''

'''
class BankAccount(object):

    def __init__(self, balance):
        self.balance = balance

    def withdraw(self):
        amount = float(input("How Much Money Would You Like To Withdraw: "))
        if(amount > self.balance):
            print("You Can't Withdraw That Much Money, Your Current Balance: ", "{:.2f}".format(Account1.get_Balance()))
            return False
        else:
            print("You Successfully Withdrew ", "{:.2f}".format(amount))
            self.balance = self.balance - amount
            return True

    def deposit(self):
        amount = float(input("How Much Money Would You Like To Deposit: "))
        if(amount < 0):
             print("You Can't Deposit That!")
        else:
            self.balance = self.balance + amount
            print("You Successfully Deposited ", "{:.2f}".format(amount), "To Your Account")
            return True

    def get_Balance(self):
        #print ("Your Current Balance: " ,self.balance)
        return self.balance

Account1 = BankAccount(300.00)

print("Your Current Balance:", "{:.2f}".format(Account1.get_Balance()))

while(Account1.withdraw() != True):
    if Account1.withdraw() == True:
        break
    Account1.withdraw()
while(Account1.deposit() != True):
    if Account1.deposit() == True:
        break
    Account1.deposit()

print("Your Current Balance:", "{:.2f}".format(Account1.get_Balance()))

'''

'''
class AreaOfCircle(object):

    def __init__(self, radius):
        self.radius = radius

    def circles_Area(self):
        return math.pi * self.radius**2
    
    def get_radius(self):
        return self.radius

    def edit_Radius(self):
        user_Input = input("Insert Your Circles Radius: ")
        if(user_Input.isdigit):
            user_Int_Input = int(user_Input)
            if(user_Int_Input <= 0):
                print("You Provided An Incorrect Circles Radius!")
                return False
            else:
                self.radius = user_Int_Input
                return True
        else:
            print("You Didn't Provide A Proper Number!")
        
Circle1 = AreaOfCircle(8)

print("Circle With A Radius Of: ",Circle1.get_radius(), ", Area Is: ", Circle1.circles_Area())

while (Circle1.edit_Radius() == False):
    pass

#while(Circle1.edit_Radius() != True):
   # if Circle1.edit_Radius() == True:
   #     break
   # else:
 #       Circle1.edit_Radius()

print("Circle With A Radius Of: ",Circle1.get_radius(), ", Area Is: ", Circle1.circles_Area())
'''