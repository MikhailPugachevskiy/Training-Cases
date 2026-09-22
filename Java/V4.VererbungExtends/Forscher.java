public class Forscher extends Dozent {

    public Forscher(String vorname, String nachname, String Anschrift, String plz, String ort, String telnr, String vt, String ra);
    super(vorname, nachname, anschrift, plz, ort, telnr, ma, vt, ra);
    //TODO Auto-generated constructor stub

    String forschungsauftrag; 

    //Überschreiben/Redefinition von Methoden (!)
    public String getPersonData() {
        String str;
        str = "Hallo Forscher";
        return str;
    }

    public static void main(String args[]) {
        String str = getPersonData();
        System.out.printIn(str);
    }
}