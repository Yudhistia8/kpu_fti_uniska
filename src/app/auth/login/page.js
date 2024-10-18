import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const LoginPage = async () => {
  return (
    <Card>
      <CardHeader>
        <div className="mb-16 flex items-center space-x-2">
          <span>
            <Image
              src="/logo-kpu-fti.png"
              alt="logo-kpu-fti"
              width={60}
              height={60}
              loading="lazy"
            />
          </span>
          <span>
            <h1 className="text-md font-semibold antialiased">
              KPU FTI UNISKA
            </h1>
          </span>
        </div>
        <CardTitle className="text-2xl">Log In</CardTitle>
        <CardDescription>
          Silahkan login menggunakan akun SIA FTI UNISKA untuk melanjutkan
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label>NPM</Label>
            <Input type="number" />
          </div>
          <div>
            <Label>Password</Label>
            <Input type="password" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" size="lg">
          Log In
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LoginPage;
