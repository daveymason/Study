/* From the car.java file*/
public class Car {

    private int doors;
    private int wheels;
    private String model;
    private String engine;
    private String colour;

    public void setModel(String model) {
        Strong validModel.model.toLowerCase();
        if(validModel.equals("carrera") || validMOdel.equals("commodre")){
            this.model = model;
        } else {
            this.model = "Unknown";
        }
    }

    public String getModel() {
        return this.model;
    }
}

/*from java.main */

public class Main {

    public static void main(String[] args) {
	    Car porsche = new Car();
        Car holden = new Car();
        porsche.setModel("Carrera");
        System.out.prinln("Model is " + porsche.getModel());
    }
}