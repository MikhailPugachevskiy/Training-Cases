public class Person {

	public String vorname; //Kopieren nach Datei "Dozent.java"
	public String nachname;
	public String anschrift;
	public String plz;
	public String ort;
	public String telnr;
	
	//Konstruktor -> Bezug zur Datei "Dozent.java"
	public Person(String v, String n, String a, String p, String o, String t) {
		this.vorname = v;
		this.nachname = n;
		this.anschrift = a;
		this.plz = p;
		this.ort = o;
		this.telnr = t;
	}
	
	//getter-Methode
	//final sorgt quasi fuer eine Finalisierung
	public final String getPersonData() {
		String str;
		str = ("Vorname: " +this.vorname+ "Nachname: " +this.nachname+ "Anschrift: " +this.anschrift+ 
				"PLZ: " +this.plz+ "Ort: " +this.ort+ "Telefon-Nummer: " +this.telnr); 
		return str; 
	}
	
}
