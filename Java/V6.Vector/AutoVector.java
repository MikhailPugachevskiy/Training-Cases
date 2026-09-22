//Vorlesung 6: Vector

/*Übungsaufgabe 6:
Legen Sie ein Objekt der Klasse Vector an, fügen Sie drei Objekte der Klasse Auto hinzu, 
geben Sie alle Objekte im Vektor aus (welche Möglichkeiten gibt es dazu?), 
löschen Sie das Element an Position 1
und löschen Sie ein vorher eingefügtes Objekt anhand der Referenz.
Lassen Sie sich zwischendurch die Anzahl Elemente ausgeben.*/

import java.util.*; 

public class AutoVector {

	public static void generateAutoVector() {
		
		Vector<Auto> myAutoVector = new Vector<Auto>();
		
		Auto a1 = new Auto(23232, "VW", "Golf", "rot", true); 
		Auto a2 = new Auto(24545, "BMW", "320i", "schwarz", true);
		Auto a3 = new Auto(12122, "Audi", "A1", "blau", false); 
		
		myAutoVector.addElement(a1);
		myAutoVector.addElement(a2);
		myAutoVector.addElement(a3);
		
		Enumeration<Auto> e = myAutoVector.elements();
		while(e.hasMoreElements()) {
			Auto auto = e.nextElement();
			System.out.println("Marken: "+ auto.getMarke()); 
		}
			
		System.out.println("Element an Position 1 wird gel�scht...");
		myAutoVector.removeElementAt(1); 	
		e = myAutoVector.elements();
		while(e.hasMoreElements()) {
			Auto auto = e.nextElement();
			System.out.println("Marken: "+ auto.getMarke()); 
		}
		
		for(int i=0; i<myAutoVector.size(); i++) {
			  System.out.println(myAutoVector.elementAt(i).hashCode()); 
		  }
		
     }
	
	public static void main(String args[]) {
		generateAutoVector();
	}
}
