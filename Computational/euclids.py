#Finds greatest common divisor of two numbers
# Two integers a and b,  
# a is the larger of the two
# Divide a by b
# If remainder is 0 then b is the GCD
# Otherwise set a to b and remainder to b
# until the remainder is 0 at which point
# b is the GCD


def gcd(a, b):
    while b != 0:
        t = a
        a = b
        b = t % b
        if b == 0:
            return a

def again():
    cont = input("Continue? (y/n): ")
    if cont == "y":
        main()


def main():
    a = int(input("Enter first number: "))
    b = int(input("Enter second number: "))
    print("The GCD of", a, "and", b, "is", gcd(a, b))
    again()

main()

