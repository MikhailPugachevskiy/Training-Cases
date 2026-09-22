//Vorlesung 6: Vector

import java.util.*;


//Vector ist eine dynamische Datenstruktur
public class MyVector {
	
   public static Scanner myScanner; 

   public static void generateVector() {
	  myScanner = new Scanner(System.in); 
	  Vector<Person> myTestVector = new Vector<Person>(); 
	  
	  Person person1 = new Person("Donald", "Duck", "Entenstr.1", "12345", "Entenhausen", "0221121");
	  Person person2 = new Person("Daisy", "Duck", "Musterstr.2", "32232", "Entenhausen", "3244344");
	  
	  Person person3 = new Person("Goofy", "Duck", "Waldstr.2", "32232", "Entenhausen", "31224344");
	  
	  myTestVector.addElement(person1);
	  myTestVector.addElement(person2);
	  
	  myTestVector.insertElementAt(person3, 1); 
	  
	  //Size als eine Methode liefert die L�nge von einem Vector
	  int lengthOfMyVector = myTestVector.size(); 
	  System.out.println("Sie haben "+ lengthOfMyVector +" Personen gespeichert."); 
	  
	  //Enumerator 
	  Enumeration<Person> e = myTestVector.elements(); 
	  while(e.hasMoreElements()) {
		  Person myPerson = e.nextElement(); 
		  System.out.println(myPerson.getPersonData()); 
	  }
	  
	  System.out.print("Welches Element m�chten Sie l�schen:");
	  int pos = myScanner.nextInt(); 
	  
	  myTestVector.removeElementAt(pos);
	  
      System.out.println("Hier erfolgt die Ausgabe der Personenobjekte:"); 
	  for(int i=0; i<myTestVector.size(); i++) {
		  System.out.println(myTestVector.elementAt(i).getPersonData()); 
	  }
	 
	  //Clear l�scht alle Elemente im Vector
	  System.out.println("L�schoperation startet,...");
	  myTestVector.clear(); 
	  
	  lengthOfMyVector = myTestVector.size(); 
	  System.out.println("Sie haben "+ lengthOfMyVector +" Personen gespeichert.");
	  
   }
   
   public static void generateVector2() {
	   Vector<Integer> testVector = new Vector<Integer>();
	   boolean isIn=false;
	   testVector.addElement(344);
	   testVector.addElement(10003);
	   testVector.addElement(545);
	   testVector.addElement(3434);
	   testVector.addElement(1000);
	   int value=10003;
	   isIn = testVector.contains(value);
	   System.out.println("Suchvorgang startet f�r den Eintrag:" +value+"."); 
	   if(isIn==false) System.out.println("Eintrag wurde nicht gefunden!");
	   else if(isIn==true) System.out.println("Eintrag wurde gefunden!");	   
   }
	
   public static void main(String args[]) {
	   //generateVector(); 
	   generateVector2();
   }
	
}
