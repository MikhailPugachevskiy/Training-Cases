/*Vorlesung 5: Arrays und die JCF-Flasse ArrayList
  Grundlagen von Feldern/Arrays
  Eindimensionale Arrays
  Mehrdimensionale Arrays
  Arrays von Objekten
  Alternative: ArrayList aus dem JCF*/

// Arrays als Datenstruktur (Eindimesional, Zweidimensional)
// for-each Schleife
// Objektreferenzen in Arrays
// Exception handling als Ausblick

import java.util.*; 

public class ArrayTester {
	
	public static Scanner myScanner; 
    double[] myGlobalArray;
    boolean isRandomizedFilled; 
	

	//Eindimensionale Arrays

	/*Übungsaufgabe 5.1: 
	Deklarieren Sie ein Array mit sieben double-Werten und setzen Sie sie auf beliebige Werte. 
	Geben Sie die Werte in einer Schleife aus, ermitteln Sie den größten Wert in diesem Array und geben ihn mit seiner Position im Array aus.*/
	
	public static void doubleArray() {
		double[] myArr = {2.6, 10.0, 6.2, 0.4, 5.5, 3.2, 4.3};
		System.out.println("Ausgabe des Arrays:");
		for(double k: myArr) {
			System.out.print(k + "|");
		}
		double tester = myArr[0];
		int position=0;
		for(int i=0; i<myArr.length; i++) {
			if (myArr[i] > tester) {
				tester = myArr[i];
				position = i;
			} 
		}

		//Zeilenumbruch
		System.out.println("\n"); 
		System.out.println("Die groesste Zahl ist: "+ tester+" an der "+position+". Position.");
	}


	/*Übungsaufgabe 5.2:
	Deklarieren Sie ein Array für Werte vom Typ double und füllen Sie das Feld mit 50 zufälligen Zahlen zwischen 0 und 100.
	(Hinweis: java.lang.Math.random() liefert bei jedem Aufruf eine Zufallszahl zwischen 0 und 1)*/

	public static void doubleRandomArray() {
		double[] myArr = new double[50];
		 for(int i=0; i<myArr.length; i++) {
			 myArr[i] = randomDouble(); 
		 }
		 for(double idx : myArr) {
			 System.out.println(idx); 
		 }
	}


    /*Übungsaufgabe 5.2:
	Schreiben Sie eine Java-Klasse ArrayTest, die ein Feld von double Zahlen enthält. 
	Die gewünschte Größe des Feldes wird dem Konstruktor übergeben; ein zweiter Parameter (boolean) gibt an, ob
	das Feld mit zufälligen Zahlen zwischen 0 und 100 gefüllt werden soll. */
	
	//Konstruktor fuer Uebungsaufgabe
    public ArrayTester(int length, boolean isRandomizedFilled) {
    	myGlobalArray = new double[length];
    	this.isRandomizedFilled = isRandomizedFilled; 
    }
	
    public void arrayOperations() {
    	if(isRandomizedFilled==true) System.out.println("Das Array wird nun randomisiert befuellt.");
    	for(int i=0; i<myGlobalArray.length; i++) {
    		myGlobalArray[i] = randomDouble(); 
    	}
    }
    

    //Mehrdiminsionale Arrays
	
	/*Übungsaufgabe 5.4:
	Schreiben Sie eine Klasse Array2DTest, die ein zweidimensionales Feld ganzer Zahlen enthält (analog Klasse ArrayTest mit Zufalls-zahlen vorbelegt). 
	Der Konstruktor hat zwei Parameter: Die Anzahl Zeilen und Spalten.*/

    public double getMin() {
    	double tester = myGlobalArray[0];
    	for(int i=0; i<myGlobalArray.length; i++) {
    		if (myGlobalArray[i] < tester) tester = myGlobalArray[i];
    	}
    	return tester;
    }
    
    public double getMax() {
    	double tester = myGlobalArray[0];
    	for(int i=0; i<myGlobalArray.length; i++) {
    		if (myGlobalArray[i] > tester) tester = myGlobalArray[i];
    	}
    	return tester;
    }
    
    
	
	public static int randomInt() {
	   double random = 100 * java.lang.Math.random(); 	
	   //Typecasting (Umwandlung) 
	   int value = (int) random;
	   return value; 
	}
	
	public static double randomDouble() {
		   double random = 100 * java.lang.Math.random(); 	
		   return random; 
		}
	
	

	public static void generate2DimArray() {
		int[][] my2DimArray = new int[2][3];
		
		//Alternative Schreibweise
		int[][] my2DimContainer = new int[][]{{randomInt(),randomInt(),randomInt()},
			                                   {randomInt(),randomInt(),randomInt()}}; 		
		my2DimArray[0][0] = randomInt();
		my2DimArray[0][1] = randomInt();
		my2DimArray[0][2] = randomInt();
		my2DimArray[1][0] = randomInt();
		my2DimArray[1][1] = randomInt();
		my2DimArray[1][2] = randomInt();
		 for(int i=0; i<my2DimArray.length; i++) {
			 System.out.print("Zeile: "+ i +" -->");
			  for(int j=0; j<my2DimArray[i].length; j++) {
				  System.out.print(my2DimArray[i][j] + "|");
			  }
		 }
		
	}
	
	public static void generateArray() {
		int[] myArray = new int[3]; 
		myArray[0] = 34;
		myArray[1] = 100;
		myArray[2] = 300; 
		
		//Alternative Schreibweise
		int[] myArray2 = new int[] {45, 32, -100, 1000, 678}; 
		int size = myArray.length; 
		System.out.println("Das Array hat eine Laenge von "+ size); 

		//Klassische for-Schleife
		System.out.println("Die Ausgabe erfolgt ueber die normale for-Schleife:"); 
		double quersumme=0; 
		for(int i=0; i<3; i++) {
			System.out.print(myArray[i] +"|"); 
			quersumme = quersumme + myArray[i]; 
		}
		System.out.println("Die Quersumme betraegt: "+ quersumme); 
		double mittelwert = quersumme / myArray.length; 
		System.out.println("Der Mittelwert betraegt: "+ mittelwert); 
		//for-each Schleife
		System.out.println(); 
		System.out.println("Die Ausgabe erfolgt nun ueber die for-each Schleife:"); 
		for(int idx: myArray2) {
			System.out.print(idx +"|");
		}
	}
	
	public static void arrayFiller() {
		myScanner = new Scanner(System.in); 
		System.out.print("Wie gross soll das int-Array werden?");
		int len = myScanner.nextInt(); 
		int[] myArray = new int[len]; 
		int input=0; 
		//Starte try-Block -> hier wird die kritische Operation getaetigt
		try {
		 for(int i=0; i<myArray.length; i++) {
			 System.out.print(i +". Zahl: "); 
			 input = myScanner.nextInt();
			 myArray[i] = input; 
		 }
		}
		//Starte catch-Block
		catch(Exception fehler) {
			System.err.println("Bei der Eingabe kam es zu einem Fehler!");
			System.out.println(); 
			arrayFiller(); 
		}
		//Optional ein finally-Block zum Aufraeumen 
		finally {
			myScanner.close(); 
		}
		 for(int idx: myArray) {
			 System.out.print(idx +"|"); 
		 }
	}
	
	public static void objectsInArray() {
		Person[] myPersons = new Person[100]; 
		myPersons[0] = new Person("Donald", "Duck", "Entenstr. 1", "12345", "Entenhausen", "0221/3423");
		myPersons[1] = new Person("Daisy", "Duck", "Entenstr. 1", "12345", "Entenhausen", "0173/3434");
		myPersons[2] = new Person("Daniel", "Duesentrieb", "Erfinderstr. 100", "12345", "Entenhausen", "0172/45455");
	    for(Person idx: myPersons) {
	    	if(idx instanceof Person) System.out.println("OK"); 
	    	else System.out.println("not a person object"); 
	    	System.out.println(idx.getPersonData()); 
	    }
		
		
	}
	
	public static void main(String args[]) {
	  //generateArray(); 	
	  //arrayFiller(); 
	  //objectsInArray(); 	
	  //generate2DimArray(); 
	  //randomInt();
	  doubleArray(); 
	  doubleRandomArray(); 

	  //Aufruf des Konstruktors
	  ArrayTester testArray = new ArrayTester(10, true);
	  testArray.arrayOperations(); 
	  System.out.println("Das Minimum betraegt: "+ testArray.getMin());
	  System.out.println("Das Maximum betraegt: "+ testArray.getMax()); 
	}
	
}
