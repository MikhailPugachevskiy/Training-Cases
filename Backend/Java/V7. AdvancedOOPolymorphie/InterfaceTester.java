/*Übungsaufgabe 7:
Formulieren Sie Klassen und Interfaces so, dass die folgenden Anforderungen
erfüllt sind:
Eine Klasse Person soll einen Namen und eine eindeutige Identifikation haben,
wobei nicht festgelegt werden soll, wo und wie diese gespeichert werden.
Eine Klasse Person soll die eigenen Daten „irgendwo“ persistent abspeichern
können.
Hinweis: Überlegen Sie, wie allgemein durch Interfaces Attribute implizit eingeführt
werden können, obwohl keine Attribute (außer Konstanten) in Interfaces erlaubt
sind? */


public class InterfaceTester implements if1, if2 {

	if1 meinInterface1;
	if2 meinInterface2;
	
	public int berechneA() {
		return 10;
	}
	
	public int berechneB() {
		return 100;
	}
	
	public static String testMeinInterface(if1 meinInterface) {
		String str="n/a"; 
		if (meinInterface instanceof InterfaceTester) str="OK";
	   return str;
	}
	
	public static void main(String args[]) {
	  String output;
	  InterfaceTester ift = new InterfaceTester();
	  output = testMeinInterface(ift); 
	  System.out.println(output); 
	}
}
