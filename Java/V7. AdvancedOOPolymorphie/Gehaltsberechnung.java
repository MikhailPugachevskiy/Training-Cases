/*Vorlesung 7: 
Fortgeschrittene Konzepte der Objektorientierung: 
Abstrakte & finale Klassen, Methoden, Attribute
Interaces */

public final class Gehaltsberechnung {

	//Konstante
	public static final int belegschaft = 100; 
	public static Mitarbeiter[] ma; 
	public static double bruttoSumme=0;
	
	public static void main(String args[]) {
		
		ma = new Mitarbeiter[belegschaft];
		
		try {
	     	ma[0] = new Arbeiter(38, 70, 10, 200); 
	    	ma[1] = new Manager(500, 10000, 25); 
	    	ma[2] = new ExternerMitarbeiter(100, 150, 50, 10); 
	   	
	     	//Polymorphie (Vielgestaltbarkeit) 
	    	for(int i=0; i<ma.length; i++) {
		    	if(ma[i] instanceof Mitarbeiter) {
		    		System.out.println("OK, es ist ein Mitarbeiter Objekt!"); 
		     	    bruttoSumme = ma[i].monatsBrutto() + bruttoSumme;
		    	}
			else break; 
		}
		System.out.println("Die Summe aller Gehaelter betraegt: "+ bruttoSumme); 
		}
		catch (Exception exp) {
			System.err.println("Es ist ein Fehler passiert!"); 
		}
	}
	
	
}

 