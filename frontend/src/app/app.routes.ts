import { Routes } from "@angular/router";
import { EmptyPageComponent } from "@/app/pages/empty-page/empty-page.component";
import { HomeComponent } from "@/app/pages/home/home.component";
import { AboutComponent } from "@/app/pages/about/about.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "**",
    pathMatch: "full",
    component: EmptyPageComponent,
  },
];
