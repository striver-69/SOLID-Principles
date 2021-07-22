# SOLID-Principles
SOLID design patterns

#S
The main idea of the single responsibility principle is that every class/function/module/section of your code should have only one responsibility. 
This means that the code should only have one single reason to change. If there are two different reasons for the code to change, 
or if it does two distinctly different things then it is in violation of this principle and is potentially poorly designed code.

#O
The main idea of the open/closed principle is that every class/function/module/section of your code should be open for extension and closed for modification. 
This means that a class/function/module should be able to be extended in functionality without having to go into the class and change it. 
Essentially you shouldn't need to change existing code to add new functionality and instead should only have to add new code.

#L
The main idea of the Liskov substitution principle is that any function/module that interacts with a class should also be able to interact with all subclasses of that class without breaking. 
This essentially means that a class is interchangeable with its subclasses.

#I
The main idea of the interface segregation principle is that any class that implements an interface must use all functions/properties of the interface. 
JavaScript does not have actual interfaces, but a class inheritance structure is similar enough that it works in this instance. 
This means that any class that inherits from another class needs to use all of the methods/properties from the base class. 
This encourages writing small classes instead of large classes.

#D
The main idea of the dependency inversion principle is that any class that uses a dependency should only ever use the dependency through a predefined interface/wrapper.
This makes it so that your code will never directly depend on a low level API for its operations. 
The reason this is so important is because if you ever need to change or remove that dependency it becomes really difficult when it is used all over your code. 
By wrapping this dependency in an interface you can depend on the interface you created which will make changing out the dependency painless.
