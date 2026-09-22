/*Vorlesung 7: 
Fortgeschrittene Konzepte der Objektorientierung: 
Abstrakte & finale Klassen, Methoden, Attribute
Interaces */

public class ExternerMitarbeiter extends Mitarbeiter{
	
	double fahrtkosten;
	double homeofficePauschale;
	double stundenlohn;
	double arbeitsstunden;
	
	public ExternerMitarbeiter(double f, double hp, double std, double arb) {
		this.fahrtkosten = f;
		this.homeofficePauschale = hp;
		this.stundenlohn = std;
		this.arbeitsstunden = arb;
	}
	
	public double monatsBrutto() {
		return (fahrtkosten+homeofficePauschale) + (stundenlohn*arbeitsstunden); 
	}

}
