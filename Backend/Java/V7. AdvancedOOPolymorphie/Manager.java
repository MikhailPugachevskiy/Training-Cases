/*Vorlesung 7: 
Fortgeschrittene Konzepte der Objektorientierung: 
Abstrakte & finale Klassen, Methoden, Attribute
Interaces */

public class Manager extends Mitarbeiter{

	double fixgehalt;
	double umsatz;
	double provision;
	
	public Manager(double fix, double u, double p) {
		this.fixgehalt = fix;
		this.umsatz = u;
		this.provision = p; 
	}
	
	public double monatsBrutto() {
		return (fixgehalt + (umsatz*provision/100)); 
	}
	
}
