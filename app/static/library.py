from org.transcrypt.stubs.browser import *
import random

def gen_random_int(number, seed):
    result = []
    random.seed(seed)
    for i in range(0, number):
        result.append(i)
        
    random.shuffle(result)
    
    return result


def generate():
	number = 10
	seed = 200

	array = gen_random_int(10,200)


	# call gen_random_int() with the given number and seed
	# store it to the variable array
	
	# convert the items into one single string 
	# the number should be separated by a comma
	# and a full stop should end the string.

	
	

	array_str = ""

	for i in range(0,len(array)):
		array_str += str(array[i]) + ', '
	array_str = array_str[:-2]
	array_str += '.'



	# This line is to placed the string into the HTML
	# under div section with the id called "generate"	
	document.getElementById("generate").innerHTML = array_str

	return array_str


def sortnumber1():
	'''	This function is used in Exercise 1.
		The function is called when the sort button is clicked.

		You need to do the following:
		- get the list of numbers from the "generate" HTML id, use document.getElementById(id).innerHTML
		- create a list of integers from the string of numbers
		- call your sort function, either bubble sort or insertion sort
		- create a string of the sorted numbers and store it in array_str
	'''
	array = document.getElementById("generate").innerHTML 
	
	array = list(array)
	array1 = []
	for i in range(0,(len(array)-1),3):
		array1.append(int(array[i]))

	

	bubble_sort(array1)

	

	array_str = ""
	
	for i in range(0,len(array1)):
		array_str += str(array1[i]) + ', '
	array_str = array_str[:-2]
	array_str += '.'
	
	document.getElementById("sorted").innerHTML = array_str

	return array_str

def bubble_sort(array):
    count = 0
    n = len(array)
    swapped = True
    while swapped:
        swapped = False
        for idx in range(1, n):
            count += 1
            if array[idx-1] > array[idx]:
                array[idx - 1], array[idx] = array[idx], array[idx - 1]
                swapped = True
    return 




	#issa cheng ye's part baby YUM YUM

def sortnumber2(): 
	
	'''	This function is used in Exercise 2.
		The function is called when the sort button is clicked.

		You need to do the following:
		- Get the numbers from a string variable "value".
		- Split the string using comma as the separator and convert them to 
			a list of numbers
		- call your sort function, either bubble sort or insertion sort
		- create a string of the sorted numbers and store it in array_str
	'''
	# The following line get the value of the text input called "numbers"
	value = document.getElementsByName("numbers")[0].value
	
	

	# Throw alert and stop if nothing in the text input
	if value == "":
		window.alert("Your textbox is empty")
		return

	new_number = value.replace(" ","").split(',')
	new_array = [int(num) for num in new_number]
	bubble_sort(new_array)

	array_str = ""
	
	for i in range(0,len(new_array)):
		array_str += str(new_array[i]) + ', '
	array_str = array_str[:-2]
	array_str += '.'

	document.getElementById("mickey").innerHTML = "bingbongbeepboop this is your sorted array:"
	document.getElementById("sorted").innerHTML = array_str 
	
	return array_str