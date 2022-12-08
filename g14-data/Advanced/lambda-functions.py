def sum1(n1,n2):
    return n1 + n2

sum = lambda n1, n2 : n1 + n2

print(sum1(2,3))
print(sum(1,3))

def myMainFunction(factor):
  return lambda x: x * factor
  # x * 2


myDoubleFunction = myMainFunction(2)
myFourFunction = myMainFunction(4)


print(myDoubleFunction(487484))
print(myFourFunction(910))


