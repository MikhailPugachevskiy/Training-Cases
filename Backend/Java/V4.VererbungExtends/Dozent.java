//Vorlesung 4: Vererbung/Extends

import java.util.*; 
/*Vererbung wird in Java mit dem keyword: extends
 *In Java darf eine Unterklasse (hier:Dozent) eine
 *einzige Oberklasse (=Superklasse) haben. 
 */
public class Dozent extends Person {
	
	String mitarbeiternummer; 
	String vorlesungstitel;
	String raum; 
	static Scanner myScanner;

	//Konstruktor -> Hier muss die Datei "Person.java" betrachtet werden
	public Dozent(String vorname, String nachname, String anschrift, String plz, String ort, 
			         String telnr, String ma, String vt, String ra) {

		//Aufruf des Superkonstruktors
		super(vorname, nachname, anschrift, plz, ort, telnr);
		this.mitarbeiternummer = ma;
		this.vorlesungstitel = vt;
		this.raum = ra; 
	}
	
	
	/*public String vorname; //Kopieren von Datei "Person.java"
	public String nachname;
	public String anschrift;
	public String plz;
	public String ort;
	public String telnr;*/


    public static Dozent erstelleDozent() {
        myScanner = new Scanner(System.in); 
        String vorname, nachname, anschrift, plz, ort, telnr, mitarbeiternummer, vorlesungstitel, raum;
        System.out.println("Erstelle Dozent");
        System.out.print("Vorname: ");
        vorname = myScanner.nextLine(); 
        System.out.print("Nachname: ");
        nachname = myScanner.nextLine();
        System.out.print("Anschrift: ");
        anschrift = myScanner.nextLine();
        System.out.print("PLZ: ");
        plz = myScanner.nextLine();
        System.out.print("Ort: ");
        ort = myScanner.nextLine();
        System.out.print("Telefonnummer: ");
        telnr = myScanner.nextLine();
        System.out.println("------------------");
        System.out.print("Mitarbeiternummer: ");
        mitarbeiternummer = myScanner.nextLine();
        System.out.print("Vorlesunstitel: ");
        vorlesungstitel = myScanner.nextLine();
        System.out.print("Raum: "); 
        raum = myScanner.nextLine();
        Dozent d = new Dozent(vorname, nachname, anschrift, plz, ort, telnr, mitarbeiternummer, 
        		vorlesungstitel, raum);
        return d; 
   }
	
	
	public static void main(String args[]) {

		//Arrays (= Felder) sind Datenstrukturen, die vorab eine feste Laenge aufweisen.
		Dozent[] meineDozenten = new Dozent[2]; 
	    //Dozent d1 wird angelegt
		Dozent d1;
	    d1 = erstelleDozent();	
		meineDozenten[0] = d1; 
		//Dozent d2 wird angelegt
		Dozent d2;
		d2 = erstelleDozent(); 
		meineDozenten[1] = d2;
		
		//Ausgabe aller Objekte im Array meineDozenten
		System.out.println("Jetzt erfolgt die Ausgabe:"); 
		for(int index=0; index<2; index++) {
			System.out.println(meineDozenten[index].getPersonData()); 
		}
		
	}
	
}





