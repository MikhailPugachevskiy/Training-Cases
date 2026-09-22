/*Vorlesung 7: 
Fortgeschrittene Konzepte der Objektorientierung: 
Abstrakte & finale Klassen, Methoden, Attribute
Interfaces */

public class Arbeiter extends Mitarbeiter{

//Bezug zu Datei "Mitarbeiter.java"

	double arbeitsstunden;
	double stundenlohn;
	double ueberstunden;
	double schichtzulage;

	public Arbeiter(double a, double std, double u, double schichtzulage) {
		this.arbeitsstunden = a;
		this.stundenlohn = std;
		this.ueberstunden = u;
		this.schichtzulage = schichtzulage;
	}
	
	public double monatsBrutto() {
		return (arbeitsstunden + ueberstunden + schichtzulage) * stundenlohn;
	}
	
	
}
