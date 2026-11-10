/*Vorlesung 7: 
Fortgeschrittene Konzepte der Objektorientierung: 
Abstrakte & finale Klassen, Methoden, Attribute
Interaces */

//Abstrakte Klasse, ein Erzeugen von Objekten ist nicht moeglich

public abstract class Mitarbeiter {

	//final hier als Definition einer Konstante 
	public static final double umrechnungsfaktor = 1.95583; 
	
	int personalnummer;
	String name;
	
	//Abstrakte Methode
	public abstract double monatsBrutto(); 
	
	//Konkrete Methode
   	public final int getPersonalnummer() {
   		return personalnummer; 
   	}
	
}
