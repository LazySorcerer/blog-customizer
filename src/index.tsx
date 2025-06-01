import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	ArticleStateType,
	defaultArticleState,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	debugger;
	const [cssParams, setAppState] =
		useState<ArticleStateType>(defaultArticleState);
	const setParams = (params: ArticleStateType) => {
		debugger;
		setAppState(params);
	};

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': cssParams.fontFamilyOption.value,
					'--font-size': cssParams.fontSizeOption.value,
					'--font-color': cssParams.fontColor.value,
					'--container-width': cssParams.contentWidth.value,
					'--bg-color': cssParams.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setParams={setParams} />
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
