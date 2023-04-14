import { DefaultNamingStrategy, type NamingStrategyInterface } from 'typeorm';
import snakeCase from './ConventionDatabase';

class CustomNamingStrategy
	extends DefaultNamingStrategy
	implements NamingStrategyInterface
{
	tableName(className: string, customName: string): string {
		return customName || snakeCase(className);
	}

	columnName(
		propertyName: string,
		customName: string,
		embeddedPrefixes: string[]
	): string {
		return (
			snakeCase(embeddedPrefixes.join('_')) +
			(customName || snakeCase(propertyName))
		);
	}

	relationName(propertyName: string): string {
		return snakeCase(propertyName);
	}

	columnNameCustomized(customName: string): string {
		return customName;
	}
}

export default CustomNamingStrategy;
