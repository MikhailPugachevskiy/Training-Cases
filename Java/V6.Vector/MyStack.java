/* Stack (= Kellerspeicher, Stapelspeicher) ist eine dynamische Datenstruktur
 * LIFO  (= Last-In First-Out)
*/
import java.util.*;
import java.util.stream.Stream;

public class MyStack {
	
	static Scanner myScanner;
	
	public static void generateStack() {
		boolean marker=true; 
		myScanner = new Scanner(System.in);
		String str;
		Stack<String> myTestStack = new Stack<String>(); 
		do {
			System.out.println("Geben Sie eine Textnachricht ein, Abbruch mit eof:");
			str = myScanner.nextLine(); 
			if(str.equals("eof")) {
				System.out.println("Das Programm wird nun beendet.");
				marker = false;
			}
			else {
				//push Operation
				myTestStack.push(str);
			}			
		}while(marker); 
		
	   /*	String output;
		 for(int i=0; !myTestStack.empty(); i++) {
			 System.out.println(i +". Element:");
			 //pop Operation
			 output = myTestStack.pop();
			 System.out.println(output); 
		 }
		*/
		
		 System.out.println("Alternative Ausgabemoeglichkeit ueber einen Stream:"); 
		 Stream<String> myStream = myTestStack.stream();
		 myStream.forEach((String) -> {System.out.print(String +" "); });

	//Bezug zu Datei "Person.java"
		 
		 Stack<Person> myStackObj = new Stack<Person>(); 
		 
		 myStackObj.push(new Person("Donald", "Duck", "Entenstr.1", "12345", "Entenhausen", "0221121"));
		 myStackObj.push(new Person("Donald", "Duck", "Entenstr.1", "12345", "Entenhausen", "0221121"));
		 myStackObj.push(new Person("Donald", "Duck", "Entenstr.1", "12345", "Entenhausen", "0221121"));
		 myStackObj.push(new Person("Donald", "Duck", "Entenstr.1", "12345", "Entenhausen", "0221121"));
		 myStackObj.push(new Person("Donald", "Duck", "Entenstr.1", "12345", "Entenhausen", "0221121"));
		 myStackObj.push(new Person("Donald", "Duck", "Entenstr.1", "12345", "Entenhausen", "0221121"));
		 myStackObj.push(new Person("Donald", "Duck", "Entenstr.1", "12345", "Entenhausen", "0221121"));
		 
		 
	}
	
	public static void main(String args[]) {
		generateStack(); 
	}

}
