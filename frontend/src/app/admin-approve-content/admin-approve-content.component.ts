import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-approve-content',
  templateUrl: './admin-approve-content.component.html',
  styleUrls: ['./admin-approve-content.component.scss']
})
export class AdminApproveContentComponent implements OnInit {

  petProfiles = [{description: 'Chase after silly colored fish toys around the house. Eat plants, meow, and throw up because ' +
    'i ate plants behind the couch as lick i the shoes. Play time hide when guests come over, so shove bum in owner\'s face like ' +
    'camera lens twitch tail in permanent irritation sniff catnip and act crazy. ', author: 'sampleUser'},
    {description: 'Kitty kitty climb a tree, wait for a fireman jump to fireman then scratch his face but jumps off balcony ' +
      'gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then ' +
      'plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows', author: 'sampleUser'},
    {description: 'when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into ' +
      'pool and swims even though it does not like water murder hooman toes or massacre a bird in the living room and then ' +
      'look like the cutest and most innocent animal on the planet and find empty spot in cupboard and sleep all day so ' +
      'loved it, hated it, loved it, hated it', author: 'sampleUser'},
    {description: 'Pet me pet me pet me pet me, bite, scratch, why are you petting me eat the fat cats food for small kitty ' +
      'warm kitty little balls of fur hide at bottom of staircase to trip human. Eats owners hair then claws head i vomit ' +
      'in the bed in the middle of the night meowing non stop for food kick up litter touch water with paw then recoil ' +
      'in horror.', author: 'sampleUser'}];
  shopItems = [{description: 'Pet me pet me pet me pet me, bite, scratch, why are you petting me eat the fat cats food for small kitty ' +
      'warm kitty little balls of fur hide at bottom of staircase to trip human. Eats owners hair then claws head i vomit ' +
      'in the bed in the middle of the night meowing non stop for food kick up litter touch water with paw then recoil ' +
      'in horror.', author: 'sampleUser'},
    {description: 'Pet me pet me pet me pet me, bite, scratch, why are you petting me eat the fat cats food for small kitty ' +
      'warm kitty little balls of fur hide at bottom of staircase to trip human. Eats owners hair then claws head i vomit ' +
      'in the bed in the middle of the night meowing non stop for food kick up litter touch water with paw then recoil ' +
      'in horror.', author: 'sampleUser'},
    {description: 'Pet me pet me pet me pet me, bite, scratch, why are you petting me eat the fat cats food for small kitty ' +
      'warm kitty little balls of fur hide at bottom of staircase to trip human. Eats owners hair then claws head i vomit ' +
      'in the bed in the middle of the night meowing non stop for food kick up litter touch water with paw then recoil ' +
      'in horror.', author: 'sampleUser'}];
  blogPosts = [{description: 'Pet me pet me pet me pet me, bite, scratch, why are you petting me eat the fat cats food for small kitty ' +
      'warm kitty little balls of fur hide at bottom of staircase to trip human. Eats owners hair then claws head i vomit ' +
      'in the bed in the middle of the night meowing non stop for food kick up litter touch water with paw then recoil ' +
      'in horror.', author: 'sampleUser'},
    {description: 'Pet me pet me pet me pet me, bite, scratch, why are you petting me eat the fat cats food for small kitty ' +
      'warm kitty little balls of fur hide at bottom of staircase to trip human. Eats owners hair then claws head i vomit ' +
      'in the bed in the middle of the night meowing non stop for food kick up litter touch water with paw then recoil ' +
      'in horror.', author: 'sampleUser'}];

  currentList = this.petProfiles;
  //0 - pet profiles, 1 - shop items, 2 - blog posts
  tabSelected = 0;

  constructor() { }

  ngOnInit() {
  }

  showPets(){
    this.currentList = this.petProfiles;
    this.tabSelected = 0;
  }
  showItems(){
    this.currentList = this.shopItems;
    this.tabSelected = 1;
  }
  showPosts(){
    this.currentList = this.blogPosts;
    this.tabSelected = 2;
  }
}
