/*
 * @Author: stupid cat
 * @Date: 2017-05-07 18:23:25
 * @Last Modified by: stupid cat
 * @Last Modified time: 2017-05-07 18:23:25
 *
 * This project uses the AGPLv3 license. Please read the license file before using/adapting any of the code.
 */

bot.on('shardReady', async function(id) {
    let shard = bot.shards.get(id);
    logger.shard(`${id} Ready! G:${shard.guildCount}`);
});