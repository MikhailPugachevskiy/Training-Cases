public class TwoDimArrayTester {

	int[][] myArr;
	
	//Konstruktor
	public TwoDimArrayTester(int zeile, int spalte) {
		myArr = new int[zeile][spalte];
	}
	
	//Zufallsgenerator
	public static int randomInt() {
		double random = 100 * java.lang.Math.random();
		int value = (int) random;
		return value; 
	}
	
	//Array wird befaellt und ausgegeben
	public void arrayFillerPrinter() {
		 for(int i=0; i<myArr.length; i++) { 
   		  for(int j=0; j<myArr[i].length; j++) {
   			 myArr[i][j] = randomInt(); 
   		 }
	     }
		 for(int i=0; i<myArr.length; i++) { 
   		 System.out.print("Zeile " +i + " -> "); 
   		  for(int j=0; j<myArr[i].length; j++) {
   			 System.out.print(myArr[i][j] + " | "); 
   		 }
   		 System.out.print("\n");
	      }	 
	}

	//Berechnung der Zeilensumme
    public void rowSum() {
		int rowSum = 0;  
		for(int i=0; i<myArr.length; i++) {  
    		 for(int j=0; j<myArr[i].length; j++) {
    			rowSum = rowSum + myArr[i][j];
    		 }
    		 System.out.print(i +". Zeilensumme:" +rowSum);
    		 rowSum=0; 
    		 System.out.print("\n");
	      }	
	}
    
    //Berechnung der Spaltensumme
	public void colSum() {
		int colSum = 0;  
		for(int i=0; i<myArr.length; i++) {  
    		 for(int j=0; j<myArr[i].length; j++) {
    		   colSum = colSum + myArr[j][i];
    		 }
    		 System.out.print(i +". Spaltensumme:" +colSum);
    		 colSum=0; 
    		 System.out.print("\n");
	      }	
	}
	
	public static void main (String args[]) {
		TwoDimArrayTester my2DimArr = new TwoDimArrayTester(10,10);
		my2DimArr.arrayFillerPrinter(); 
		System.out.println("Nun erfolgt die Ausgabe der Zeilensummen:");
		my2DimArr.rowSum();
		System.out.println("Nun erfolgt die Ausgabe der Spaltensummen:");
		my2DimArr.colSum(); 
	}
}
