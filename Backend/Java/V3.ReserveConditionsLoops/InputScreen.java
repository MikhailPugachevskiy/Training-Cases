//Vorlesung 3: 
// Grundelemente der Programmierung: Reservierte Wörter der Sprache, Verzweigung zur bedingten Ausführung, Schleifen zur wiederholten Ausführung

/* Eingabe über die Tastatur (System.in)
 * Kontrollfluss (if-else if-else / switch)
 * Schleifen (for, while, do-while) 
 */

import java.util.*; 

public class InputScreen {
	
	static Scanner myScanner, myScanner2, myScanner3; 
	
	public static void calculateF() {
		myScanner3 = new Scanner(System.in);
		int inputNum;
		System.out.print("Geben Sie eine Zahl ein: ");
		inputNum = myScanner3.nextInt(); 
		int counter=1;
		int result=1;
		while(counter <= inputNum) {
			result = counter * result;
			counter++;
		 }
	    System.out.println("Die Fakultaet von "+ inputNum +" betraegt " +result); 	
	}
	
	
	public static void selectionList() {
		boolean marker=true; 
		myScanner2 = new Scanner(System.in); 
		  String inputStr; 
		   do {
	         	System.out.println("1. Berechnung der Fakultaet einer Zahl - Auswahltaste A");
		        System.out.println("2. Funktion 2 - Auswahltaste B");
		        System.out.println("3. Funktion 3 - Auswahltaste C");
		        System.out.println("------------------------------"); 
		        System.out.println("Das Programm kann mit (E)nde abgebrochen werden");
		        System.out.println("Bitte taetigen Sie eine Auswahl!"); 
		        inputStr = myScanner2.nextLine(); 
		        switch(inputStr) {
		        case ("A") : {
		    	            calculateF(); 
		    	            break;
		        }
		        case ("B") : System.out.println("Funktion 2 wird nun gestartet..."); break;
		        case ("C") : System.out.println("Funktion 3 wird nun gestartet..."); break;
		        //Abbruch des Programms
		        case ("E") : {
		        	        System.out.println("Das Programm wird nun beendet!");
		        	        marker=false;
		        	        break;
		        }
		        default : System.out.println("Diese Eingabe wird nicht unterstuetzt!"); break;
		        }
		    } while(marker);
		   
		   }
	
	
	
	public static void evenOddNumbersCheck(int i) {
		if(i % 2 == 0) {
			            System.out.println(i +" ist eine gerade Zahl!"); 
		               }
		else System.out.println(i +" ist eine ungerade Zahl.");
	}
	
	public static void checkNumbers(int i1, int i2) {
		if(i1<i2) System.out.println("Zahl 1 ist kleiner als Zahl 2."); 
		 else if(i1>i2) System.out.println("Zahl 1 ist groesser als Zahl 2.");
		  else {
			     System.out.println("Zahl1 ist echtgleich zu Zahl2."); 
			     evenOddNumbersCheck(i1); 
		       }
	}

	public static void inputConsole() {
		myScanner = new Scanner(System.in);
		int input1, input2;
		System.out.print("Bitte geben Sie die 1. Zahl ein:");
		input1 = myScanner.nextInt(); 
		System.out.print("Bitte geben Sie die 2. Zahl ein:");
		input2 = myScanner.nextInt();
		checkNumbers(input1, input2); 
	}
	
	public static void main(String args[]) {
	 //	for(int index=0; index<1; index++) {
	 //	  System.out.println("Aktueller Laufindex: " +index); 	
	//	  inputConsole(); 
	 //	}
		selectionList();
	//	myScanner.close(); 
	//	myScanner2.close(); 
	}
	
}
