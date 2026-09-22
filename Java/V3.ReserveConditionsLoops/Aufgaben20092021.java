//Vorlesung 3: 
// Grundelemente der Programmierung: Reservierte Wörter der Sprache, Verzweigung zur bedingten Ausführung, Schleifen zur wiederholten Ausführung

/*Übungsaufgabe 3.1 
Bei einem Kreditantrag läuft die interne Prüfung in einer Bank bspw. wie folgt ab: 
„Wenn ein Kunde einen Kredit über <=€2000 beantragt, wird der Antrag automatisch bewilligt. 
Bei einer größeren Summe bis €5000 kann ein Entscheidungsbefugter allein entscheiden; 
wenn die Summe >€5000 ist, müssen zwei Entscheidungsbefugte unabhängig von einander entscheiden (Vier-Augen-Prinzip).“
Formulieren Sie dies mit if/else-Anweisungen und geben Sie jeweils auf dem Bildschirm aus, wie viele Mitarbeiter entscheiden müssen.*/

import java.util.*;

public class Aufgaben20092021 {

	static Scanner myScanner; 
	static int creditCase;
	

		public static void creditCheck() {
		myScanner = new Scanner(System.in);
		int kredit;
		System.out.print("Bitte geben Sie den Kreditbetrag an: ");
		kredit = myScanner.nextInt();
		if(kredit<=2000) {
			creditCase=1;
			System.out.println("Kredit wurde genehmigt!");
		}  
		     else if(kredit>2000 && kredit<=5000) {
			 creditCase=2; 
			 System.out.println("1 Entscheidungsbefugter wird angerufen!");
		     }
	        	else {
	        		creditCase=3;  
	        		System.out.println("2 Entscheidungsbefugte werden angerufen!"); 
	   	        	}       	
	}


/*Übungsaufgabe 2:
Formulieren Sie die „Übersetzung“ einer Zahl von eins bis sieben in den Wochentag mit if/else-Anweisungen und Ausgaben auf dem Bildschirm.*/
	
	public static void checkingWeekDays(String day) {
		switch(day) {
		case ("Montag") : System.out.println("1"); break; 
		case ("Dienstag") : System.out.println("2"); break; 
		case "Mittwoch" : System.out.println("3"); break; 
		case "Donnerstag" : System.out.println("4"); break; 
		case "Freitag" : System.out.println("5"); break; 
		case "Samstag" : System.out.println("6"); break; 
		case "Sonntag" : System.out.println("7"); break; 
		default : System.out.println("Ungueltige Eingabe!"); break;
		}
	}
	
	
	public static void checkingDays(int n) {
		if (n==1) System.out.println("Montag");
		else if (n==2) System.out.println("Dienstag");
		else if (n==3) System.out.println("Mittwoch");
		else if (n==4) System.out.println("Donnerstag");
		else if (n==5) System.out.println("Freitag");
		else if (n==6) System.out.println("Samstag");
		else if (n==7) System.out.println("Sonntag");
	}	
	


	public static void main(String args[]) {
		creditCheck();
		checkingDays(1);
		checkingWeekDays("Montag");
		checkingCredit(); 
		loops(); 
	}
}


/*Übungsaufgabe 3.3: 
Schreiben Sie folgende Schleifen:
• while-Schleife, die alle ganzen Zahlen von -5 bis 5 (je einschließlich!) ausgibt
• do/while-Schleife, die die ganzen Zahlen von 5 bis -5 ausgibt
• for-Schleife, die alle geraden Zahlen von -17 bis 22 ausgibt*/

	public static void loops() {
		int i=-5;
		 //While-Schleife
		 while(i<=5) {
			 System.out.println(i);
			 i++; 
		 }
		 //For-Schleife
		 for(int idx=-17; idx<=22; idx++) {
			 System.out.println(idx);
		 }
		 int idx2=-5;
		 //Do-While-Schleife
		 do {
			System.out.println(idx2); 
			idx2++; 
		 }while(idx2<=5);
	}


		public static void checkingCredit() {
		switch (creditCase) {
		case 1 : System.out.println("Kredit wird genehmigt"); break;
		case 2 : System.out.println("1 Entscheidungsbefugter wird informiert"); break;
		case 3 : System.out.println("2 Entscheidungsbefugte werden informiert"); break; 
		}
	}