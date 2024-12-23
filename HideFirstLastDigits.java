import java.util.Scanner;
public class HideDigits {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number : ");
        int n = sc.nextInt();
        int m = 0;
        int count = 0;
        int temp = n;

        while (temp > 0) {
            count++;
            temp /= 10;
        }
        temp = n;
        int i = 1;

        while (temp > 0) {

            int r = temp % 10;
            if (i != 1 && i != count) {
                int p = (int) (Math.pow(10, i - 2));
                m = r * p + m;
            }
            temp /= 10;
            i++;
        }
        System.out.println("After hiding : " + m);
        sc.close();
    }
}
