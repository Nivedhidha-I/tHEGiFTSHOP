import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesHomeComponent } from './accessories/accessories-home/accessories-home.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { BrassHeartPendantComponent } from './accessories/brass-heart-pendant/brass-heart-pendant.component';
import { GlassBottleComponent } from './accessories/glass-bottle/glass-bottle.component';
import { GlassJewelryBoxComponent } from './accessories/glass-jewelry-box/glass-jewelry-box.component';
import { InterlockingHeartsNecklaceComponent } from './accessories/interlocking-hearts-necklace/interlocking-hearts-necklace.component';
import { RussianRingNecklaceComponent } from './accessories/russian-ring-necklace/russian-ring-necklace.component';
import { WoodenDeskOrganizerComponent } from './accessories/wooden-desk-organizer/wooden-desk-organizer.component';
import { BirthdaySpecialPowerBankComponent } from './electronics/birthday-special-power-bank/birthday-special-power-bank.component';
import { CassiaWatchAndHammeredBarBraceletComponent } from './electronics/cassia-watch-and-hammered-bar-bracelet/cassia-watch-and-hammered-bar-bracelet.component';
import { ElectronicsHomeComponent } from './electronics/electronics-home/electronics-home.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { InspiringPowerBankComponent } from './electronics/inspiring-power-bank/inspiring-power-bank.component';
import { VintageWoodenBluetoothSpeakerComponent } from './electronics/vintage-wooden-bluetooth-speaker/vintage-wooden-bluetooth-speaker.component';
import { WirelessBluetoothHeadphonesComponent } from './electronics/wireless-bluetooth-headphones/wireless-bluetooth-headphones.component';
import { IndexHomeComponent } from './index/index-home/index-home.component';
import { IndexComponent } from './index/index.component';
import { AloeSucculentInPapaCeramicPotComponent } from './others/aloe-succulent-in-papa-ceramic-pot/aloe-succulent-in-papa-ceramic-pot.component';
import { BirthdayLEDLampComponent } from './others/birthday-led-lamp/birthday-led-lamp.component';
import { OthersHomeComponent } from './others/others-home/others-home.component';
import { OthersComponent } from './others/others.component';
import { ScentedCandleVotiveComponent } from './others/scented-candle-votive/scented-candle-votive.component';
import { TelescopeInWoodenBirthdayBoxComponent } from './others/telescope-in-wooden-birthday-box/telescope-in-wooden-birthday-box.component';
import { TinnedTeddyBearComponent } from './others/tinned-teddy-bear/tinned-teddy-bear.component';
import { DogLoverNotebookComponent } from './stationaries/dog-lover-notebook/dog-lover-notebook.component';
import { EcoFriendlyDiaryWithWoodenBookmarksComponent } from './stationaries/eco-friendly-diary-with-wooden-bookmarks/eco-friendly-diary-with-wooden-bookmarks.component';
import { ItalianSoftPUNotebookComponent } from './stationaries/italian-soft-pu-notebook/italian-soft-pu-notebook.component';
import { LuxuriousLeatherNotebookComponent } from './stationaries/luxurious-leather-notebook/luxurious-leather-notebook.component';
import { PeacockBlueLeatherJournalComponent } from './stationaries/peacock-blue-leather-journal/peacock-blue-leather-journal.component';
import { SoilMateEcoFriendlyNotebookComponent } from './stationaries/soil-mate-eco-friendly-notebook/soil-mate-eco-friendly-notebook.component';
import { StationariesHomeComponent } from './stationaries/stationaries-home/stationaries-home.component';
import { StationariesComponent } from './stationaries/stationaries.component';
import { BirthdayPhotoCLockComponent } from './wall-hangings/birthday-photo-clock/birthday-photo-clock.component';
import { GreatestDadWoodenFrameComponent } from './wall-hangings/greatest-dad-wooden-frame/greatest-dad-wooden-frame.component';
import { HeartShapedBirthdayFrameComponent } from './wall-hangings/heart-shaped-birthday-frame/heart-shaped-birthday-frame.component';
import { MiniCanvasPhotoframeComponent } from './wall-hangings/mini-canvas-photoframe/mini-canvas-photoframe.component';
import { NailArtNamePlateComponent } from './wall-hangings/nail-art-name-plate/nail-art-name-plate.component';
import { PhotoframeOfFriendsComponent } from './wall-hangings/photoframe-of-friends/photoframe-of-friends.component';
import { WallHangingsHomeComponent } from './wall-hangings/wall-hangings-home/wall-hangings-home.component';
import { WallHangingsComponent } from './wall-hangings/wall-hangings.component';

const routes: Routes = [
  {path:'',component: IndexComponent,children:[
    {path:'',component: IndexHomeComponent},
    {path:"Accessories", component: AccessoriesComponent, children: [
      {path:'',component: AccessoriesHomeComponent},
      {path:"brass-heart-pendant", component: BrassHeartPendantComponent},
      {path:"glass-bottle", component: GlassBottleComponent},
      {path:"glass-jewelry-box", component: GlassJewelryBoxComponent},
      {path:"interlocking-hearts-necklace", component: InterlockingHeartsNecklaceComponent},
      {path:"russian-ring-necklace", component: RussianRingNecklaceComponent},
      {path:"wooden-desk-organizer", component: WoodenDeskOrganizerComponent}
  ]},
    {path:"Electronics", component: ElectronicsComponent, children: [
      {path:'',component: ElectronicsHomeComponent},
      {path:"birthday-special-power-bank", component: BirthdaySpecialPowerBankComponent},
      {path:"cassia-watch-and-hammered-bar-bracelet", component: CassiaWatchAndHammeredBarBraceletComponent},
      {path:"inspiring-power-bank", component: InspiringPowerBankComponent},
      {path:"wireless-bluetooth-headphones", component: WirelessBluetoothHeadphonesComponent},
      {path:"vintage-wooden-bluetooth-speaker", component: VintageWoodenBluetoothSpeakerComponent}
    ]},
    {path:"Stationaries", component: StationariesComponent, children: [
      {path:'',component: StationariesHomeComponent},
      {path:"dog-lover-notebook", component: DogLoverNotebookComponent},
      {path:"eco-friendly-diary-with-wooden-bookmarks", component: EcoFriendlyDiaryWithWoodenBookmarksComponent},
      {path:"italian-soft-pu-notebook", component: ItalianSoftPUNotebookComponent},
      {path:"luxurious-leather-notebook", component: LuxuriousLeatherNotebookComponent},
      {path:"peacock-blue-leather-journal", component: PeacockBlueLeatherJournalComponent},
      {path:"soil-mate-eco-friendly-notebook", component: SoilMateEcoFriendlyNotebookComponent}
    ]},
    {path:"Wall-Hangings", component: WallHangingsComponent, children: [
      {path:'',component: WallHangingsHomeComponent},
      {path:"birthday-photo-clock", component: BirthdayPhotoCLockComponent},
      {path:"greatest-dad-wooden-frame", component: GreatestDadWoodenFrameComponent},
      {path:"heart-shaped-birthday-frame", component: HeartShapedBirthdayFrameComponent},
      {path:"mini-canvas-photoframe", component: MiniCanvasPhotoframeComponent},
      {path:"nail-art-name-plate", component: NailArtNamePlateComponent},
      {path:"photoframe-of-friends", component: PhotoframeOfFriendsComponent}
    ]},
    {path:"Others", component: OthersComponent, children: [
      {path:'',component: OthersHomeComponent},
      {path:"aloe-succulent-in-papa-ceramic-pot", component: AloeSucculentInPapaCeramicPotComponent},
      {path:"birthday-led-lamp", component: BirthdayLEDLampComponent},
      {path:"scented-candle-votive", component: ScentedCandleVotiveComponent},
      {path:"telescope-in-wooden-birthday-box", component: TelescopeInWoodenBirthdayBoxComponent},
      {path:"tinned-teddy-bear", component: TinnedTeddyBearComponent}
  ]}]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
