import { License } from './license.model.js';
import { User } from './user.model.js';

// Register associations
User.associate({ License });
License.associate({ User });

export { License, User };
