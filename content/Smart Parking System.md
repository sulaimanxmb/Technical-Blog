### Items :
1. Arduino Board
2. LCD display with I2C module pre-soldered
3. 2 IR sensors
4. Male-male & Male-female Jumper wires
5. Breadboard
6. Servo motor SG90


`Note :` 5V & GCC -> +ve rail,    GND -> -ve rail in breadboard 

### Connections :
#### LCD with arduino :
GCD -> GCD
VCC -> 5V
SDA -> A4
SCL -> A5

#### IR-1 with arduino :
GCD -> GCD
VCC -> 5V
OUT -> D2

#### Servo motor with arduino :
red wire (VCC) -> 5V
Black/Brown wire(GCD) -> GCD
orange wire(Signal) -> D4

#### IR-2 with arduino :
GCD -> GCD
VCC -> 5V
OUT -> D3


### Code :
```C++
#include <Wire.h>                //Header files
#include <LiquidCrystal_I2C.h>
#include <Servo.h> 

LiquidCrystal_I2C lcd(0x27,16,2);   
Servo myservo;

int IR1 = 2;             //To control servo mototr
int IR2 = 3;

int Slot = 4;           //Total number of parking Slots

int flag1 = 0;          //Starting parking number
int flag2 = 0;

  

void setup() 
{

	Serial.begin(9600);      //Debugging at 9600 baud
	lcd.init(); //initialize the lcd
	lcd.backlight(); //open the backlight
	
	pinMode(IR1, INPUT); //Sets IR sensor as input
	pinMode(IR2, INPUT);
	
	myservo.attach(4);   //ataches servo to pin 4
	myservo.write(100);  //closes the gate at start
	
	  
	lcd.setCursor (0,0);            //Prints message
	lcd.print("     SMART    ");
	lcd.setCursor (0,1);
	lcd.print(" PARKING SYSTEM ");
	
	delay (2000);           //Message stays for 2 seconds
	lcd.clear();            //Clears message
}


void loop()       //LOGIC 
{
    if (digitalRead(IR1) == LOW && flag1 == 0)
    {
        if (Slot > 0)
        {
            flag1 = 1;

            if (flag2 == 0)
            {
                myservo.write(0);
                Slot = Slot - 1;
            }
        }
        else
        {
            lcd.setCursor(0, 0);
            lcd.print("    SORRY :(    ");

            lcd.setCursor(0, 1);
            lcd.print("  Parking Full  ");

            delay(3000);
            lcd.clear();
        }
    }

    if (digitalRead(IR2) == LOW && flag2 == 0)
    {
        flag2 = 1;

        if (flag1 == 0)
        {
            myservo.write(0);
            Slot = Slot + 1;
        }
    }

    if (flag1 == 1 && flag2 == 1)
    {
        delay(1000);
        myservo.write(100);
        flag1 = 0;
        flag2 = 0;
    }

    lcd.setCursor(0, 0);          //Printing
    lcd.print("    WELCOME!    ");

    lcd.setCursor(0, 1);
    lcd.print("Slot Left: ");
    lcd.print(Slot);
}
```

for me the LCD display didin't work properly so I left it out
