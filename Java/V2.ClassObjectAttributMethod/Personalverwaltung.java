//Vorlesung 2 
//Grundlegende Konzepte von Objekt-Orientierung: Klasse, Objekt, Attribut, Methode, Beziehung

public class Personalverwaltung {
	
	public static void berechneGehalt(Mitarbeiter emp) {
		//Punktnotation dient dazu um Attributswerte zu erhalten
		System.out.println("Personalnummer: " + emp.personalnummer + "Arbeitsstunden: " + emp.arbeitsstunden); 
	    int gehalt = emp.arbeitsstunden * 35;
	    System.out.println("Das Gehalt betraegt: " +gehalt); 
	}
	
	public static void main(String args[]) {
		//new Operator erzeugt ein Objekt = Instanz = Exemplar
		Mitarbeiter personal1 = new Mitarbeiter(1, 100, "Max", "Muster", "Entenhausen", true);
		Mitarbeiter personal2 = new Mitarbeiter(2, 200, "Lisa", "Schneider", "Koeln", false); 
		berechneGehalt(personal2); 
		berechneGehalt(personal1); 

	}
	
}
