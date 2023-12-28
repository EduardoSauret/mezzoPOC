import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TabsPage } from './tabs.page';

const routes: Routes = [
	{
		path: '',
		component: TabsPage,
		children: [
			{ path: 'home', loadChildren: () => import('../feed/feed.module').then(m => m.FeedPageModule) },
			{ path: 'uploader', loadChildren: () => import('../uploader/uploader.module').then(m => m.UploaderPageModule) },
			{ path: 'profile', loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule) },
			{ path: 'post/:id', loadChildren: () => import('../post/post.module').then(m => m.PostPageModule) },
			{ path: 'edit-profile', loadChildren: () => import('../edit-profile/edit-profile.module').then(m => m.EditProfilePageModule) },
		]
	}
];


@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabsRoutingModule { }
