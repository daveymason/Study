'''
  Students  |  Grades  |  Letters
------------|----------|----------
  George    |  46      |  F
  Michell   |  80      |  B
  Josh      |  12      |  F
  Chloe     |  68      |  D
  Stanley   |  99      |  A
  Annie     |  100     |  A+
'''
gradeTotest = int(input("Enter a grade: "))
if gradeTotest >= 100:
    print("A+")
elif gradeTotest >= 90:
    print("A")
elif gradeTotest >= 80:
    print("B")
elif gradeTotest >= 70:
    print("C")
elif gradeTotest >= 60:
    print("D")
elif gradeTotest >= 50:
    print("E")
else:
    print("F")
