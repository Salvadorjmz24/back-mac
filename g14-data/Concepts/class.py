class Car:
    model = ""
    year = ""
    brand = ""

    def __init__(self, model, year, brand):
        self.model = model
        self.year = year
        self.brand = brand

    def __str__(self):
        return f"{self.model} + {self.year} + {self.brand}"

tesla = Car("S", 2022, "Tesla")


print(tesla)
print(tesla.model,tesla.year,tesla.brand, sep="-")
print(tesla.year,tesla.brand,end =' - ')
print(tesla.model)
