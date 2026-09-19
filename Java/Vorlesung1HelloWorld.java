//Vorlesung 1: Einführung

//Kapitel 1: Variablen, Datentypen, Attribute, Methoden

/*public class HelloWorld {

	public static void main(String args[]) {
		String str1, str2;
		str1 = "Hello World!";
		str2 = "My Java Program!";
		System.out.printIn(str1 + " " + str2); => Terminal (Eclipse): Hello World! My Java Program!
	}
} */

//Übungsaufgabe 1.2: 
// Entwickeln Sie ein erstes "Hello World" Java-Programm.

public class HelloWorld {

	//Die Methode berechneSumme berechnet zwei int-Werte
	public static void berechneSumme(int a, int b) {
		int summe;
		summe = a + b;
		System.out.println("Die Summe betr�gt: " +summe); 
	}
	
	//Konzept von Overloading (Methoden wird �berladen)
	public static void berechneSumme(int a, int b, int c) {
		int summe;
		summe = a + b + c;
		System.out.println("Die Summe betr�gt: " +summe); 
	}
	
	//Eine Methode mit R�ckgabewert (= funktionalen Programmierung)
	public static int berechneProdukt(int x, int y) {
		int produkt;
		produkt = x * y;
		return produkt; 
	}
	
	//Das ist die main Methode
	public static void main(String args[]) {
		/*int index=1; 
		float index2=1.95f;
		String firstString, str2;
		boolean isIn;
		isIn = true; 
		firstString = "Hello World!";
        str2 = "Workshop Uni K�ln";
        System.out.println(index2 +" "+ firstString +" "+ str2); */
		int a,b,c; 
		a=5;   //Zuweisungsoperator 
		b=10; 
		c=20;
		berechneSumme(a,b); 
        berechneSumme(a,b,c); 
        int result;
        result = berechneProdukt(a,b);
        System.out.println("Das Ergebnis lautet: " +result); 
	}
}
